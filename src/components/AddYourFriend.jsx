import AllergensList from "./AllergensList";

const AddYourFriend = () => {
    return (
        <div className="wrapper">
            <form action="">
                <label htmlFor="addAFriend" id="addAFriend">Add a Friend!</label>
                <input id="addAFriend" type="text" />

                {/* Mary's buttons */}
                <AllergensList />
            </form>
        </div>
    )
}

export default AddYourFriend;
