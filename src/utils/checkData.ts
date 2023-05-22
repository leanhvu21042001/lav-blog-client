import { isEmpty } from 'lodash';

const isEmptyData = (data: [] | object | string) => isEmpty(data);

export default {
  isEmptyData,
};
