package com.mrkrn.ppecomm.backend.database.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Data
@Entity
@Table(name="product")
public class Product {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    @Column(name="sku")
    private String sku;
    @Column(name="name")
    private String name;
    @Column(name="description")
    private String description;
    @Column(name="image_url")
    private String imageUrl;
    @Column(name="price")
    private Integer price;
    @Column(name="is_active")
    private Boolean isActive;
    @Column(name="units_in_stock")
    private Integer unitsInStock;
    @Column(name="date_created")
    @CreationTimestamp
    private Date dateCreated;
    @Column(name="last_updated")
    @UpdateTimestamp
    private Date lastUpdated;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private ProductCategory category;
}
