import React from 'react'

export default function NewProjectListing() {
  return (
    <>
        <div class="col-lg-9">
          {/* <!-- Top bar with results count and sorting --> */}
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-md-6 mb-2 mb-md-0">
                  <h6 class="mb-0">12 Products</h6>
                  <small class="text-muted">Filtered results</small>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center justify-content-md-end">
                    <i class="fa fa-sort text-muted me-2"></i>
                    <span class="text-nowrap me-2 d-none d-sm-inline">Sort by:</span>
                    <select class="form-select form-select-sm w-auto">
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="price_low">Price: Low to High</option>
                      <option value="price_high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                    </select>
   </div>
                </div>
              {/* </div> */}
            </div>
          </div>
          </div>
          </div>
    </>
  )
}
