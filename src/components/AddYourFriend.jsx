const AddYourFriend = () => {
    return (
        <div className="wrapper">
            <form action="">
                <label htmlFor="addAFriend" id="addAFriend">Add a Friend!</label>
                <input id="addAFriend" type="text" />

                {/* Mary's buttons */}
                <fieldset>
                    <legend>Any dietary restrictions</legend>
                    <div>
                        <input type="checkbox" id="none" name="none" checked />
                            <label htmlFor="none">None</label>
                    </div>
                    <div>
                        <input type="checkbox" id="eggFree" name="eggFree" />
                            <label htmlFor="eggFree">Egg Free</label>
                    </div>
                    <div>
                        <input type="checkbox" id="glutenFree" name="glutenFree" />
                        <label htmlFor="glutenFree">Gluten Free</label>
                    </div>
                    <div>
                        <input type="checkbox" id="fishFree" name="fishFree" />
                        <label htmlFor="fishFree">Fish Free</label>
                    </div>
                    <div>
                        <input type="checkbox" id="nutFree" name="nutFree" />
                        <label htmlFor="nutFree">Nut Free</label>
                    </div>
                    <div>
                        <input type="checkbox" id="eggFree" name="eggFree" />
                        <label htmlFor="meatFree">Meat Free</label>
                    </div>                    
                </fieldset>
            </form>
        </div>
    )
}

export default AddYourFriend;