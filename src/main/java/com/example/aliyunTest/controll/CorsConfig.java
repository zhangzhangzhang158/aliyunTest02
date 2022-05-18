package com.example.aliyunTest.controll;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 * @description: CORS跨域问题处理配置
 * @author: WhiteCrowZHZ
 * @date: 2022/2/16 13:08
 */

@Configuration
public class CorsConfig {

    public CorsConfig() {
    }

    @Bean
    public CorsFilter corsFilter() {
        // 1.添加cors配置信息
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:4200");

        // 设置是否发送cookie信息
        config.setAllowCredentials(true);

        // 设置允许访问的方式
        config.addAllowedMethod("*"); // 所有

        // 设置允许的header
        config.addAllowedHeader("*"); // 所有

        // 2.为url添加映射路径
        UrlBasedCorsConfigurationSource corsConfigurationSource = new UrlBasedCorsConfigurationSource();
        corsConfigurationSource.registerCorsConfiguration("/**", config); // 所有

        // 3.返回定义好的corsSource
        return new CorsFilter(corsConfigurationSource);
    }
}