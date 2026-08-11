package com.mrkrn.ppecomm.backend.config;

import com.mrkrn.ppecomm.backend.database.model.Product;
import com.mrkrn.ppecomm.backend.database.model.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class CustomRestConfig implements RepositoryRestConfigurer {
    /**
     * Disable specified http methods
     * TODO: beautify this in the future to prevent some users from using them and not just everyone
     *
     * @param config RepositoryRestConfiguration
     * @param cors   CorsRegistry
     */
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] unsupportedMethods = {HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE};

        disableHttpMethodsForClass(Product.class, unsupportedMethods, config);
        disableHttpMethodsForClass(ProductCategory.class, unsupportedMethods, config);
    }

    private void disableHttpMethodsForClass(Class<?> clazz, HttpMethod[] unsupportedMethods, RepositoryRestConfiguration config) {
        config.getExposureConfiguration()
                .forDomainType(clazz)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedMethods))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedMethods));
    }
}
