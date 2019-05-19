const getGuests = async () => {
  try {
    const res = await fetch('/.netlify/functions/read-all/')
    return res.json();
  } catch(err) {
    console.log('error occurred during fetch of lambda funtion', err)
    return err;
  }
}

const getGuestsByFullName = async (first, last) => {
  try {
    const params = new URLSearchParams();
    params.append('first', first);
    params.append('last', last)
    const res = await fetch(`/.netlify/functions/read/?${params}`)
    return res.json();
  } catch (err) {
    console.log('error occurred while fetching guests with lambda functions', err);
    return err;
  }
}

export { getGuests, getGuestsByFullName };