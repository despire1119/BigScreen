<template>
  <div class="what-new">
    <div class="container">
      <h3>热门推广</h3>
      <table>
        <tr class="blog-news">
          <td class="blog-news-grid">
            <div class="news-container">
              <div class="news-grid-left">
                <h4>06</h4>
                <small>of january 2019</small>
              </div>
              <div class="news-grid-right">
                <h4>Claritas est etiam processus</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                </p>
              </div>
            </div>
          </td>
          <td class="blog-news-grid b_n_g">
            <div class="news-container">
              <div class="news-grid-left">
                <h4>28</h4>
                <small>of january 2019</small>
              </div>
              <div class="news-grid-right">
                <h4>Claritas est etiam processus</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                </p>
              </div>
            </div>
          </td>
        </tr>
        <tr class="blog-news b_n">
          <td class="blog-news-grid">
            <div class="news-container">
              <div class="news-grid-left">
                <h4>21</h4>
                <small>of january 2019</small>
              </div>
              <div class="news-grid-right">
                <h4>Claritas est etiam processus</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                </p>
              </div>
            </div>
          </td>
          <td class="blog-news-grid b_n_g">
            <div class="news-container">
              <div class="news-grid-left">
                <h4>05</h4>
                <small>of january 2019</small>
              </div>
              <div class="news-grid-right">
                <h4>Claritas est etiam processus</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                </p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  /* -- What new Part Starts Here -- */
.what-new
  padding 2em 0 4em
  text-align center
.what-new h3
  font-size 4em
  font-weight 700
  color #000
  margin 0.5em 0
.blog-news
  border-bottom 1px solid rgba(60, 58, 62, 0.19)
  padding 0
.blog-news-grid
  padding 2em
  border-right 1px solid rgba(60, 58, 62, 0.19)
  width 50%
  .news-container
    display flex
    justify-content space-around
    align-items center
.news-grid-left
  width 210px
  margin-right 2%
.news-grid-right
  flex 1
.news-grid-left h4
  font-weight 500
  color #3c3a3e
  font-size 10em
  margin -24px 0 -18px
.news-grid-left small
  line-height 36px
  color #3c3a3e
  font-weight 100
  font-style italic
.news-grid-right h4
  font-size 1.3em
  font-weight 500
  color #3c3a3e
  margin 0 0 0.5em 0
.news-grid-right p
  font-size 1em
  font-weight 100
  color #3c3a3e
  line-height 1.6em
.b_n_g
  margin-right 0
  border-right 0
.b_n
  border-bottom 0
/* -- What new Part Ends Here -- */
</style>
