import axios from "../axios";
import config from "../config";

const getDropdownOptions = async () => {
  try {
    const response = await axios.get(
      `${config.baseURL}/settings/dropdown-options`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addDropdownOption = async (option) => {
  try {
    const response = await axios.post(
      `${config.baseURL}/settings/dropdown-options`,
      { option }
    );
    // debugger;
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteDropdownOption = async (optionToDelete) => {
  try {
    const response = await axios.delete(
      `${config.baseURL}/settings/dropdown-options/${optionToDelete}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const downloadBackup = async () => {
  try {
    const response = await axios.get(`${config.baseURL}/settings/backup`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getDropdownOptions,
  addDropdownOption,
  deleteDropdownOption,
  downloadBackup,
};
