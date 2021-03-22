pragma solidity >=0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable {
  uint256 private _currentTokenId = 0;
  mapping(uint256 => string) public imgUrl;
  event Mint (address owner, string imgUrl, uint id);
  event Burn (address owner, string imgUrl, uint id);

  constructor() ERC721("NFT", "NFT") Ownable() {
  }
  
  function mint(string memory _imgUrl) public {    
    uint256 newTokenId = _getNextTokenId();
    _mint(msg.sender, newTokenId);
    _incrementTokenId();
    imgUrl[newTokenId] = _imgUrl;
     emit Mint(msg.sender, _imgUrl , newTokenId);
  }   

    /**
    * @dev Mints a token to an address with a tokenURI.
    * @param _to address of the future owner of the token
    */
  function mintTo(address _to) public onlyOwner {
    uint256 newTokenId = _getNextTokenId();
    _mint(_to, newTokenId);
    _incrementTokenId();
  }

  /**
    * @dev calculates the next token ID based on value of _currentTokenId 
    * @return uint256 for the next token ID
    */
  function _getNextTokenId() private view returns (uint256) {
    return (_currentTokenId + 1);
  }

  /**
    * @dev increments the value of _currentTokenId 
    */
  function _incrementTokenId() private  {
    _currentTokenId++;
  }

  /*

  function baseTokenURI() public view returns (string memory) {
    return "";
  }

  function tokenURI(uint256 _tokenId) external view returns (string memory) {
    return Strings.strConcat(
        baseTokenURI(),
        Strings.uint2str(_tokenId)
    );
  }
  */

  function getImgUrl (uint id) public view returns (string memory){
    return imgUrl[id];
  }

  function burn(uint _id) public {    
    _burn(_id);
    emit Burn(msg.sender, imgUrl[_id] , _id);
    imgUrl[_id] = "";        
  }

}