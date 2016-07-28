package com.order.data.mapper;

import com.order.data.model.UserIntegrate;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserIntegrateMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    int countByExample(UserIntegrateExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    int deleteByExample(UserIntegrateExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    int insert(UserIntegrate record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    int insertSelective(UserIntegrate record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    List<UserIntegrate> selectByExample(UserIntegrateExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    UserIntegrate selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    int updateByExampleSelective(@Param("record") UserIntegrate record, @Param("example") UserIntegrateExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    int updateByExample(@Param("record") UserIntegrate record, @Param("example") UserIntegrateExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    int updateByPrimaryKeySelective(UserIntegrate record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_user_integrate
     *
     * @mbggenerated Sun Jun 19 12:27:18 CST 2016
     */
    int updateByPrimaryKey(UserIntegrate record);
}