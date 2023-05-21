const DeleteDataForm = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmailId, setSelectedEmailId] = useState("");
  const [message, setMessage] = useState("");

  // Fetch all email data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Send GET request to retrieve all email data
      const response = await axios.get("http://localhost:5000/data");

      if (response.status === 200) {
        // Update the emails state with the retrieved data
        setEmails(response.data);
      } else {
        // Display error message
        setMessage("Failed to fetch email data.");
      }
    } catch (error) {
      // Display error message
      setMessage("Error occurred while fetching email data.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send DELETE request to delete data associated with the selected email ID
      const response = await axios.delete(
        `http://localhost:5000/data/${selectedEmailId}`,
      );

      if (response.status === 200) {
        // Display success message
        setMessage(`Data with ID ${selectedEmailId} has been deleted.`);

        // Clear the selectedEmailId
        setSelectedEmailId("");

        // Refetch the email data to update the list
        fetchData();
      } else {
        // Display error message
        setMessage("Failed to delete data.");
      }
    } catch (error) {
      // Display error message
      setMessage("Error occurred while deleting data.");
    }
  };

  return (
    <div>
      <h2>Delete Data</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <select
          value={selectedEmailId}
          onChange={(e) => setSelectedEmailId(e.target.value)}
          required
        >
          <option value="">Select an email</option>
          {emails.map((email) => (
            <option key={email._id} value={email._id}>
              {email.email}
            </option>
          ))}
        </select>
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteDataForm;
