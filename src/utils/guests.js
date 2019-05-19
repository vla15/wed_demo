const getGuests = async () => {
  try {
    const res = await fetch('/.netlify/functions/read-all/')
    return res.json();
  } catch(err) {
    console.log('error occurred during fetch of lambda funtion', err)
    return err;
  }
}

export { getGuests };