
package com.example.miguel.computers.security;
/*
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.
import org.springframework.security.config.annotation.web.builders.HttpSecurity;




@Configuration
@RestController
public class SecurityAdapter extends WebSecurityAdapter{
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests(
                a -> a.antMatchers(
                        "/", "/error", "/webjars/**"
                ).permitAll().anyRequest().authenticated()
        ).exceptionHandling(
                e -> e.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
        ).oauth2Login();

        http.cors().and().csrf().disable();

    }
}
*/


