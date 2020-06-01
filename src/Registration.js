import React from 'react';

function Registration() {
    return(
       <React.Fragment>
        <form>
        <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">First Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Last Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
            </div>
        </div>
        </form>
       </React.Fragment> 
    )
}

export default Registration