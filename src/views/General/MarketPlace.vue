<template>
<main id="main" class="site-main">
    <div class="archive-city">
        <div class="col-left">
            <div class="archive-filter">
                <form action="#" class="filterForm" id="filterForm">
                    <div class="filter-head">
                        <h2>Filter</h2>
                        <a href="#" class="clear-filter"><i class="fal fa-sync"></i>Clear all</a>
                        <a href="#" class="close-filter"><i class="las la-times"></i></a>
                    </div>
                    <div class="filter-box">
                        <h3>Cities</h3>
                        <div class="filter-list">
                            <div class="filter-group">
                                <div class="field-check">
                                    <label for="new_york">
                                        <input type="checkbox" id="new_york" value="">
                                        New York
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="london">
                                        <input type="checkbox" id="london" value="">
                                        London
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="Chicago">
                                        <input type="checkbox" id="Chicago" value="">
                                        Chicago
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="rome">
                                        <input type="checkbox" id="rome" value="">
                                        Rome
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="barcelona">
                                        <input type="checkbox" id="barcelona" value="">
                                        Barcelona
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                            </div>
                            <a href="#" class="more open-more" data-close="Close" data-more="More">More</a>
                        </div>
                    </div>
                    <div class="filter-box">
                        <h3>Categories</h3>
                        <div class="filter-list">
                            <div class="filter-group">
                                <div class="field-check">
                                    <label for="restaurant">
                                        <input type="checkbox" id="restaurant" value="">
                                        Restaurant
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="shopping">
                                        <input type="checkbox" id="shopping" value="">
                                        Shopping
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="nightlife">
                                        <input type="checkbox" id="nightlife" value="">
                                        Nightlife
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="hostel">
                                        <input type="checkbox" id="hostel" value="">
                                        Hostel
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="luxury">
                                        <input type="checkbox" id="luxury" value="">
                                        Luxury
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="market">
                                        <input type="checkbox" id="market" value="">
                                        Market
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                            </div>
                            <a href="#" class="more open-more" data-close="Close" data-more="More">More</a>
                        </div>
                    </div>
                    <div class="filter-box">
                        <h3>Place Type</h3>
                        <div class="filter-list">
                            <div class="filter-group">
                                <div class="field-check">
                                    <label for="coffe_shop">
                                        <input type="checkbox" id="coffe_shop" value="">
                                        Coffe Shop
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="clothing_shop">
                                        <input type="checkbox" id="clothing_shop" value="">
                                        Clothing Shop
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="spa">
                                        <input type="checkbox" id="spa" value="">
                                        Spa
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="spa">
                                        <input type="checkbox" id="massage" value="">
                                        Massage
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                            </div>
                            <a href="#" class="more open-more" data-close="Close" data-more="More">More</a>
                        </div>
                    </div>
                    <div class="filter-box">
                        <h3>Amenities</h3>
                        <div class="filter-list">
                            <div class="filter-group">
                                <div class="field-check">
                                    <label for="amen_res">
                                        <input type="checkbox" id="amen_res" value="">
                                        Free Wifi
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="amen_coffee">
                                        <input type="checkbox" id="Reservations" value="">
                                        Reservations
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="museum">
                                        <input type="checkbox" id="Creditcards" value="">
                                        Credit cards
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                                <div class="field-check">
                                    <label for="museum">
                                        <input type="checkbox" id="Restroom" value="">
                                        Restroom
                                        <span class="checkmark"><i class="la la-check"></i></span>
                                    </label>
                                </div>
                            </div>
                            <a href="#" class="more open-more" data-close="Close" data-more="More">More</a>
                        </div>
                    </div>
                    <div class="form-button align-center">
                        <a href="#" class="btn">Apply</a>
                    </div>
                </form>
                <form action="#" class="sortForm" id="sortForm">
                    <div class="filter-head">
                        <h2>Sort</h2>
                        <a href="#" class="clear-filter">Clear filter</a>
                        <a href="#" class="close-filter"><i class="las la-times"></i></a>
                    </div>
                    <div class="filter-box">
                        <h3>Sort by</h3>
                        <div class="filter-list">
                            <div class="field-check">
                                <label for="newest">
                                    <input type="checkbox" id="newest" value="">
                                    Newest
                                    <span class="checkmark"><i class="la la-check"></i></span>
                                </label>
                            </div>
                            <div class="field-check">
                                <label for="average_rating">
                                    <input type="checkbox" id="average_rating" value="">
                                    Average rating
                                    <span class="checkmark"><i class="la la-check"></i></span>
                                </label>
                            </div>
                            <div class="field-check">
                                <label for="featured">
                                    <input type="checkbox" id="featured" value="">
                                    Featured
                                    <span class="checkmark"><i class="la la-check"></i></span>
                                </label>
                            </div>
                            <div class="field-check">
                                <label for="lth">
                                    <input type="checkbox" id="lth" value="">
                                    Price: Low to high
                                    <span class="checkmark"><i class="la la-check"></i></span>
                                </label>
                            </div>
                            <div class="field-check">
                                <label for="htl">
                                    <input type="checkbox" id="htl" value="">
                                    Price: High to low
                                    <span class="checkmark"><i class="la la-check"></i></span>
                                </label>
                            </div>
                            <a href="#" class="more open-more" data-close="Close" data-more="More">More</a>
                        </div>
                    </div>
                    <div class="form-button align-center">
                        <a href="#" class="btn">Apply</a>
                    </div>
                </form>
            </div><!-- .archive-fillter -->
            <div class="main-primary">
                <div class="filter-mobile">
                    <ul>
                        <li><a class="mb-filter mb-open" href="#filterForm">Filter</a></li>
                        <li><a class="mb-sort mb-open" href="#sortForm">Sort</a></li>
                    </ul>
                    <div class="mb-maps"><a class="mb-maps" href="#"><i class="las la-map-marked-alt"></i></a></div>
                </div>
                <div class="top-area top-area-filter">
                    <div class="filter-left">
                        <span class="result-count"><span class="count">24</span> results</span>
                        <a href="#" class="clear">Clear filter</a>
                    </div>
                    <div class="filter-center">
                       
                    </div>
                    <div class="filter-right">
                        <div class="select-box">
                            <select name="sort_by" class="sort-by">
                                <option value="">Sort by</option>
                                <option value="newest">Newest</option>
                                <option value="rating">Average rating</option>
                                <option value="featured">Featured</option>
                            </select>
                            <div class="filter-control" tabindex="0">
                                <span class="current">Sort by</span>
                                <ul class="list">
                                    <li data-value="" class="option selected focus">Sort by</li>
                                    <li data-value="newest" class="option">Newest</li>
                                    <li data-value="rating" class="option">Average rating</li>
                                    <li data-value="featured" class="option">Featured</li>
                                </ul>
                            </div>
                        </div><!-- .select-box -->
                        
                        <div class="show-map">
                            <span>Maps</span>
                            <a href="#" class="icon-toggle"></a>
                        </div><!-- .show-map -->
                    </div>  
                </div>
                <div class="area-places">
                            <div class="place-item layout-02 place-hover">
                                <div class="place-inner">
                                    <div class="place-thumb hover-img">
                                        <a class="entry-thumb" href="single-1.html"><img src="images/listing/1.jpeg" alt=""></a>
                                        <a href="#" class="golo-add-to-wishlist btn-add-to-wishlist " data-place-id="185">
                                            <span class="icon-heart">
                                                <i class="la la-bookmark large"></i>
                                            </span>                                    
                                        </a>       
                                       
                                        
                                    </div>       
                                    <div class="entry-detail">
                                        <div class="entry-head">
                                            
                                            <div class="place-city">
                                                <a href="#">Karsana, Abuja</a>
                                            </div>
                                        </div>
                                        <h3 class="place-title"><a href="single-1.html">Ruisseau Residence</a></h3>
                                        <div class="entry-address"><i class="las la-map-marker"></i>153 West 27th Street, New York</div>
                                        <div class="entry-bottom">
                                            
                                            <div class="place-price">
                                                <span>NGN 36M</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="place-item layout-02 place-hover">
                                <div class="place-inner">
                                    <div class="place-thumb hover-img">
                                        <a class="entry-thumb" href="single-1.html"><img src="images/listing/2.jpeg" alt=""></a>
                                        <a href="#" class="golo-add-to-wishlist btn-add-to-wishlist " data-place-id="185">
                                            <span class="icon-heart">
                                                <i class="la la-bookmark large"></i>
                                            </span>                                    
                                        </a>       
                                       
                                        
                                    </div>       
                                    <div class="entry-detail">
                                        <div class="entry-head">
                                            
                                            <div class="place-city">
                                                <a href="#">Karsana, Abuja</a>
                                            </div>
                                        </div>
                                        <h3 class="place-title"><a href="single-1.html">Ruisseau Residence</a></h3>
                                        <div class="entry-address"><i class="las la-map-marker"></i>153 West 27th Street, New York</div>
                                        <div class="entry-bottom">
                                            
                                            <div class="place-price">
                                                <span>NGN 36M</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="place-item layout-02 place-hover">
                                <div class="place-inner">
                                    <div class="place-thumb hover-img">
                                        <a class="entry-thumb" href="single-1.html"><img src="images/listing/3.jpeg" alt=""></a>
                                        <a href="#" class="golo-add-to-wishlist btn-add-to-wishlist " data-place-id="185">
                                            <span class="icon-heart">
                                                <i class="la la-bookmark large"></i>
                                            </span>                                    
                                        </a>       
                                       
                                        
                                    </div>       
                                    <div class="entry-detail">
                                        <div class="entry-head">
                                            
                                            <div class="place-city">
                                                <a href="#">Karsana, Abuja</a>
                                            </div>
                                        </div>
                                        <h3 class="place-title"><a href="single-1.html">Ruisseau Residence</a></h3>
                                        <div class="entry-address"><i class="las la-map-marker"></i>153 West 27th Street, New York</div>
                                        <div class="entry-bottom">
                                            
                                            <div class="place-price">
                                                <span>NGN 36M</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="place-item layout-02 place-hover">
                                <div class="place-inner">
                                    <div class="place-thumb hover-img">
                                        <a class="entry-thumb" href="single-1.html"><img src="images/listing/4.jpeg" alt=""></a>
                                        <a href="#" class="golo-add-to-wishlist btn-add-to-wishlist " data-place-id="185">
                                            <span class="icon-heart">
                                                <i class="la la-bookmark large"></i>
                                            </span>                                    
                                        </a>       
                                       
                                        
                                    </div>       
                                    <div class="entry-detail">
                                        <div class="entry-head">
                                            
                                            <div class="place-city">
                                                <a href="#">Karsana, Abuja</a>
                                            </div>
                                        </div>
                                        <h3 class="place-title"><a href="single-1.html">Ruisseau Residence</a></h3>
                                        <div class="entry-address"><i class="las la-map-marker"></i>153 West 27th Street, New York</div>
                                        <div class="entry-bottom">
                                            
                                            <div class="place-price">
                                                <span>NGN 36M</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                </div>
                <div class="pagination">
                    <div class="pagination__numbers">
                        <span>1</span>
                        <a title="2" href="#">2</a>
                        <a title="3" href="#">3</a>
                        <a title="Next" href="#">
                            <i class="la la-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div><!-- .main-primary -->
        </div><!-- .col-left -->
        <div class="col-right">
            <div class="filter-head">
                <h2>Maps</h2>
                <a href="#" class="close-maps">Close</a>
            </div>
            <div class="entry-map">
                <div id="place-map-filter"></div>
            </div>
        </div><!-- .col-right -->
    </div><!-- .archive-city -->
</main><!-- .site-main -->
</template>

<script>
export default {
    data() {
        return {
            listings: []
        }
    },

    methods: {
        get_listings(){
           
            this.axios({
                url: process.env.VUE_APP_URL+'/api/listings',
                method: 'get'
            })
            .then((response) =>{
                console.log(response)
            })
            .catch((response) =>{
                console.log(response)
            })
         
        }
    },

    mounted() {
      
        this.get_listings()
      if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
    },
}
</script>