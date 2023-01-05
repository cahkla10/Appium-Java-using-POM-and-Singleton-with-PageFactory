package setups;

import com.testinium.deviceinformation.exception.DeviceNotFoundException;
import helpers.GlobalVariables;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.service.local.AppiumDriverLocalService;

import java.io.IOException;


public class DriverSetup{
    private static AppiumDriver appiumDriver;
    private static AppiumDriverLocalService service;

    public static AppiumDriver getAppiumDriver(){
        return appiumDriver;
    }

    public static void setDriver() throws IOException, DeviceNotFoundException {
        switch (System.getProperty("device")){
            case "android":
                Capabilities capabilities = new Capabilities();
                appiumDriver = new AndroidDriver(capabilities.android());
                System.out.println("Driver: " + appiumDriver + " is running!");
                break;
            /*
            case "ios":
                break;
            */
        }
    }

    public static void startAppium(){
        service = AppiumDriverLocalService.buildDefaultService();
        service.start();
        String service_url = service.getUrl().toString();
        System.out.println("Appium Service: " + service_url + " is running!");
    }

    public static void stopAppium(){
        String service_url = service.getUrl().toString();
        System.out.println("Appium Service: " + service_url + " is stopped!");
        service.stop();
    }
}