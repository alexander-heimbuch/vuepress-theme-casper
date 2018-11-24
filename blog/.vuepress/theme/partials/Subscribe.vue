 <div id="subscribe" class="subscribe-overlay">
        <a class="subscribe-overlay-close" href="#"></a>
        <div class="subscribe-overlay-content">
            {{#if @blog.logo}}
                <img class="subscribe-overlay-logo" src="{{@blog.logo}}" alt="{{@blog.title}}" />
            {{/if}}
            <h1 class="subscribe-overlay-title">Subscribe to {{@blog.title}}</h1>
            <p class="subscribe-overlay-description">Stay up to date! Get all the latest &amp; greatest posts delivered straight to your inbox</p>
            {{subscribe_form placeholder="youremail@example.com"}}
        </div>
    </div>