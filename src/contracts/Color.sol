pragma solidity >=0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Color is ERC721 {
  string[] public colors;
  mapping(string => bool) _colorExists;
  mapping(uint256 => string) public imgUrl;
  mapping(string => uint) public colorId;

  event Mint (address owner, string color, uint id);

  constructor() ERC721("Color", "COLOR") public {
  }

  // E.G. color = "#FFFFFF"
  function mint(string memory _color) public returns (uint){
    require(!_colorExists[_color]);
    colors.push(_color);
    uint id = colors.length;
    _mint(msg.sender, id);
    _colorExists[_color] = true;
    colorId[_color] = id;
    emit Mint (msg.sender, _color, id);
    return id;
   
  }

  function burn(uint id) public {
    //require(!_colorExists[_color]);
    colors[id] = "FFFFFF";
    _burn(id);
  }

}