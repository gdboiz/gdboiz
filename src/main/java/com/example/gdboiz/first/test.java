package com.example.gdboiz.first;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class test {
    @GetMapping("/first/{searchData}")
    public ResponseEntity searchData(@PathVariable String searchValue){

        Map<String, Object> data = new HashMap<>();
        data.put("data1", "value1");
        data.put("data2", "value2");
        data.put("data2", "value3");

        return ResponseEntity.ok(data);
    }
}
