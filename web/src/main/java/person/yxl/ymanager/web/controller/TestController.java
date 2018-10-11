package person.yxl.ymanager.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import person.yxl.ymanager.dao.user.UserDao;
import person.yxl.ymanager.model.user.UserDO;

import javax.annotation.Resource;

/**
 * Created by BG343094 on 2018/9/19
 *
 * @author BG343094
 */
@RestController
@RequestMapping(value = "/test")
public class TestController {
    @Resource
    private UserDao userDao;

    @GetMapping("/insert")
    public void insert() {
        UserDO userDO = new UserDO();
        userDO.setUserName("yxl");
        userDO.setPassword("123456");
        userDO.setCustomerId(1L);
        System.out.println(userDao.create(userDO));
    }
}
