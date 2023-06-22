import {
  useState, useEffect, useImperativeHandle,
} from 'react';
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/phoneMask';
// hooks
import useError from '../../hooks/useError';

import CategoriesService from '../../services/CategoriesService';

export default function useContactForm(buttonLabel, onSubmit, ref) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoriesId, setCategoriesId] = useState('');
  const [selectIsLoading, setSelectIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    removeError, setError, getErrorMessageByFieldName, errors,
  } = useError();

  const isFormValid = (name && errors.length === 0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch (error) {} finally { setSelectIsLoading(false); }
    }
    loadCategories();
  }, []);

  useImperativeHandle(ref, () => (
    {
      setFieldsValues: (contact) => {
        setName(contact.name || '');
        setEmail(contact.email || '');
        setPhone(formatPhone(contact.phone || ''));
        setCategoriesId(contact.category.id);
      },
      resetFields: () => {
        setName('');
        setEmail('');
        setPhone(formatPhone(''));
        setCategoriesId('');
      },
    }
  ), []);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    await onSubmit({
      name,
      email,
      phone,
      categoriesId,
    }).finally(() => {
      setIsSubmitting(false);
    });
  }

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'nome e obrigatorio!' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'email invalido' });
    } else {
      removeError('email');
    }
  }
  function handlePhoneCHange(event) {
    setPhone(formatPhone(event.target.value));
  }
  return {
    handleSubmit,
    getErrorMessageByFieldName,

    name,
    handleNameChange,
    isSubmitting,

    email,
    handleEmailChange,
    phone,
    handlePhoneCHange,
    setCategoriesId,
    selectIsLoading,
    categoriesId,
    categories,
    isFormValid,
  };
}
