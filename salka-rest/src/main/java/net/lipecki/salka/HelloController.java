package net.lipecki.salka;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/api/hello")
    @ResponseBody
    public String hello() {
        return "Hello world\n";
    }

}
