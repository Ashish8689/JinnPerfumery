export enum TableTypeEnum {
    him = 'FOR HIM',
    her = 'FOR HER',
    unisex = 'UNISEX',
}

export type TabType =
    | TableTypeEnum.him
    | TableTypeEnum.her
    | TableTypeEnum.unisex
