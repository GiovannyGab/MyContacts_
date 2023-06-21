class CategoryMapper {
  toPersistence(persistenceContact) {
    return {
      name: persistenceContact.name,

    };
  }

  toDomain(domainContact) {
    return {
      name: domainContact.name,

    };
  }
}

export default new CategoryMapper();
