package com.bjackson14.coxautomotive;

import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CoxautomotiveApplicationTests {

    // Web driver for selenium tests
    private static WebDriver driver;

    // Sets up driver for tests
    @BeforeClass
    public static void setUp() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\benjk\\dev\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    // Tests for successful login
    @Test
    public void testSuccessfulLoginBackEnd() {
        String jsonObject;
        driver.get("http://localhost:8080//getLogin/foo");
        jsonObject = driver.findElement(By.xpath("/html/body/pre")).getText();
        Assert.assertEquals("{\"username\":\"foo\",\"password\":\"bar\"}", jsonObject);
    }

    // Tests for unsuccessful login
    @Test
    public void testFailedLoginBackEnd() {
        String errorMessage;
        driver.get("http://localhost:8080//getLogin/foo1");
        errorMessage = driver.findElement(By.xpath("/html/body/h1")).getText();
        Assert.assertEquals("Whitelabel Error Page", errorMessage);
    }
}
