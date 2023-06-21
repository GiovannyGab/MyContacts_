class CategoryMapper {
  toPersistence(persistenceCategory) {
    return {
      name: persistenceCategory.name,
      id: persistenceCategory.id,
    };
  }

  toDomain(domainCategory) {
    return {
      name: domainCategory.name,
      id: domainCategory.id,
    };
  }
}

export default new CategoryMapper();
