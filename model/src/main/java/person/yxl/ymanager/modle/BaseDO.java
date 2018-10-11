package person.yxl.ymanager.modle;

import lombok.Data;

import java.util.Date;

/**
 * Created by BG343094 on 2018/9/26
 *
 * @author BG343094
 */
@Data
public class BaseDO {
    private Long id;

    private Long customerId;

    private Date createTime;

    private Date updateTime;

    private Long version;
}
