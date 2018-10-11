package person.yxl.ymanager.model.user;

import lombok.Data;
import person.yxl.ymanager.modle.BaseDO;

/**
 * Created by BG343094 on 2018/9/19
 *
 * @author BG343094
 */
@Data
public class UserDO extends BaseDO {
    private String userName;

    private String password;
}
