package com.revature.ridesharingapp;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggerAspect {
    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());
    
    @Before(value = "execution(* com.revature.springlearn.*.*.*(..))")
    public void beforeAdvice(JoinPoint joinPoint) {
        LOGGER.info("Start {}", joinPoint.getSignature().toShortString());
    }

    @After(value = "execution(* com.revature.springlearn.*.*.*(..))")
    public void afterAdvice(JoinPoint joinPoint) {
        LOGGER.info("End {}", joinPoint.getSignature().toShortString());
    }
    
}