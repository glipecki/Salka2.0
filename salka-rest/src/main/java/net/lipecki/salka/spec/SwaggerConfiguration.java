package net.lipecki.salka.spec;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.PathSelectors.regex;

/**
 * Provides configuration for runtime/live specification via Swagger2.
 * <p>
 *     Specification is available at ~/swagger-ui.html
 * </p>
 */
@Configuration
@EnableSwagger2
public class SwaggerConfiguration {

    @Bean
    public Docket restApiSpec() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(new ApiInfoBuilder()
                        .title("Salka 2.0 REST API")
                        .version("v1")
                        .build())
                .ignoredParameterTypes(Authentication.class)
                .select()
                .paths(regex("/api/v1/.*"))
                .build();
    }

}
