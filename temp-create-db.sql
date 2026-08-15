-- -----------------------------------------------------
-- Table pp_ecomm.product_category
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS pp_ecomm.product_category
(
    id            SERIAL PRIMARY KEY,
    category_name VARCHAR(255)
    );

-- -----------------------------------------------------
-- Table pp_ecomm.product
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS pp_ecomm.product
(
    id             SERIAL PRIMARY KEY,
    sku            VARCHAR(255),
    name           VARCHAR(255),
    description    VARCHAR(255),
    image_url      VARCHAR(255),
    price          DECIMAL,
    is_active      BOOLEAN,
    units_in_stock INTEGER,
    date_created   DATE,
    last_updated   DATE,
    category_id    INTEGER NOT NULL,
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES pp_ecomm.product_category
    );

-- -----------------------------------------------------
-- Create update date set trigger
-- -----------------------------------------------------
CREATE OR REPLACE FUNCTION trg_set_last_updated_by_default()
    RETURNS trigger
    LANGUAGE plpgsql AS
$func$
BEGIN
    NEW.last_updated := NEW.date_created;
RETURN NEW;
END
$func$;

CREATE OR REPLACE TRIGGER last_updated_default
    BEFORE INSERT
    ON pp_ecomm.product
    FOR EACH ROW
    WHEN (NEW.last_updated IS NULL AND NEW.date_created IS NOT NULL)
EXECUTE FUNCTION trg_set_last_updated_by_default();

-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------
INSERT INTO pp_ecomm.product_category(category_name)
VALUES ('BOOKS');

INSERT INTO pp_ecomm.product (sku, name, description, image_url, is_active, units_in_stock,
                              price, category_id, date_created)
VALUES ('BOOK-TECH-1000', 'JavaScript - The Fun Parts', 'Learn JavaScript',
        'assets/images/products/placeholder.png'
           , TRUE, 100, 19.99, 1, NOW());

INSERT INTO pp_ecomm.product (sku, name, description, image_url, is_active, units_in_stock,
                              price, category_id, date_created)
VALUES ('BOOK-TECH-1001', 'Spring Framework Tutorial', 'Learn Spring',
        'assets/images/products/placeholder.png'
           , TRUE, 100, 29.99, 1, NOW());

INSERT INTO pp_ecomm.product (sku, name, description, image_url, is_active, units_in_stock,
                              price, category_id, date_created)
VALUES ('BOOK-TECH-1002', 'Kubernetes - Deploying Containers', 'Learn Kubernetes',
        'assets/images/products/placeholder.png'
           , TRUE, 100, 24.99, 1, NOW());

INSERT INTO pp_ecomm.product (sku, name, description, image_url, is_active, units_in_stock,
                              price, category_id, date_created)
VALUES ('BOOK-TECH-1003', 'Internet of Things (IoT) - Getting Started', 'Learn IoT',
        'assets/images/products/placeholder.png'
           , FALSE, 100, 29.99, 1, NOW());

INSERT INTO pp_ecomm.product (sku, name, description, image_url, is_active, units_in_stock,
                              price, category_id, date_created)
VALUES ('BOOK-TECH-1004', 'The Go Programming Language: A to Z', 'Learn Go',
        'assets/images/products/placeholder.png'
           , FALSE, 100, 24.99, 1, NOW());