package com.mrkrn.ppecomm.backend.database.repositories;

import com.mrkrn.ppecomm.backend.database.model.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "productCategory", path="product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer> {
}
