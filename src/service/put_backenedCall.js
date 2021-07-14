/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function togglefollowers(loggedInUsername, profileUsername, toggleValue) {
  try {
    const response = await axios.put(
      `http://localhost:4444/putData/changeFollower?loggedInUsername=${loggedInUsername}&profileUsername=${profileUsername}&toggleValue=${toggleValue}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
