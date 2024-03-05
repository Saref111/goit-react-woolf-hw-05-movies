export const SearchForm = ({query, handleSubmit}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const input = form.elements[0];

        if (!input.value) return;
        
        handleSubmit(input.value);
    };
    return (
        <form onSubmit={onSubmit}>
        <input type="text" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
    );
};
