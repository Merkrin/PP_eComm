package com.mrkrn.ppecomm.backend.database.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "product_category")
public class ProductCategory {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "category_name")
    private String categoryName;
}
