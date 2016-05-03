package net.lipecki.salka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
public class AppConfiguration {

    public static void main(final String[] args) {
        SpringApplication.run(AppConfiguration.class, args);
    }

}
