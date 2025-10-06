export const ViewDescriptionRow = ({ data }) => {
    return (
        <>
            {data &&
                data.map((description) => (
                    <ul key={description.id}>
                        <li>
                            <span className="font-semibold text-gray-700 m-2">
                                {description.description_content}
                                <hr />
                            </span>
                        </li>
                    </ul>
                ))}
        </>
    );
};
