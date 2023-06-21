class ContactMapper {
  toPersistence(persistenceContact) {
    return {
      name: persistenceContact.name,
      email: persistenceContact.email,
      phone: persistenceContact.phone,
      category_id: persistenceContact.categoriesId,
    };
  }

  toDomain(domainContact) {
    return {
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoriesId,
    };
  }
}
export default new ContactMapper();
