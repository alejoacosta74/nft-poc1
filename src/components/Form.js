

function Form (props){
    return(
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Mint Token</h1>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const data = this.data.value
                  props.mint(data)
                }}>
                  <input
                    type='text'
                    className='form-control mb-1'
                    placeholder='e.g. #FFFFFF'
                    ref={(input) => { this.data = input }}
                  />
                  <input
                    type='submit'
                    className='btn btn-block btn-secondary'
                    value='MINT'
                  />
                </form>
                </div>
                <div className="content mr-auto ml-auto">
                <h1>Burn Token</h1>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const data = this.data.value
                  props.burn(data)
                }}>
                  <input
                    type='text'
                    className='form-control mb-1'
                    placeholder='e.g. 1'
                    ref={(input) => { this.data = input }}
                  />
                  <input
                    type='submit'
                    className='btn btn-block btn-secondary'
                    value='BURN'
                  />
                </form>
              </div>
            </main>
          </div>
        </div>
    )
}

export default Form;