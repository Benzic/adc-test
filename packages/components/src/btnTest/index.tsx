import React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../config/provider';

import './index.less';


interface BaseProps {
    /**
     * @description 自定义样式名
     */
    className?: string;
    /**
     * @description 自定义样式
     */
    style?: React.HTMLProps<HTMLStyleElement>;
}

interface BasebtnTestProps {
    /**
     * @description 样式前缀
     */
    prefixCls?: string;
}

interface INativebtnTestProps {
    /**
     * @description 是否生效
     */
    disabled?: boolean;
}

export type IbtnTestProps = BaseProps & BasebtnTestProps & INativebtnTestProps;


const btnTest = (props: IbtnTestProps) => {
    const {
        prefixCls,
        className,
        style: customStyle,
    } = props;


    const selfPrefixCls = getPrefixCls(prefixCls || 'btnTest');

    const classes = classNames(
        selfPrefixCls,
        className
    );

    return (
        <div
            className={classes}
            style={customStyle}
        >
        </div>
    );
};

export default btnTest;
