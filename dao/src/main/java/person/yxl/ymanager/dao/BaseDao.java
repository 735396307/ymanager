package person.yxl.ymanager.dao;

/**
 * Created by BG343094 on 2018/9/26
 *
 * @author BG343094
 */
public interface BaseDao<P,V> {

    /**
     * 根据id获取数据
     * @param id id
     * @return po
     */
    P getById(Long id);

    /**
     * 创建
     * @param po po
     * @return int
     */
    int create(P po);
}
