
import './App.css';
import { FaChessPawn } from "react-icons/fa6";
import { GiChessRook } from "react-icons/gi";
import { GiChessKnight } from "react-icons/gi";
import { TbChessBishopFilled } from "react-icons/tb";
import { LiaChessQueenSolid } from "react-icons/lia";
import { FaChessKing } from "react-icons/fa";
function App() {
  return (
    <table>
    <tr>
       
         <td class="w"><span class="rook"><GiChessRook /></span></td>
         <td class="d"><span class="knight"><GiChessKnight /></span></td>
         <td class="w"><span class="bishop"><TbChessBishopFilled /></span></td>
         <td class="d"><span class="queen"><LiaChessQueenSolid /></span></td>
         <td class="w"><span clss="King"><FaChessKing /></span></td>
         <td class="d"><span class="bishop"><TbChessBishopFilled /></span></td>
         <td class="w"><span class="knight"><GiChessKnight /></span></td>
         <td class="d"><span class="rook"><GiChessRook /></span></td>
    </tr>
    <tr>
        
         <td class="d"><span class="pawn"><FaChessPawn/></span></td>
         <td class="w"><span class="pawn"><FaChessPawn/></span></td>
         <td class="d"><span class="pawn"><FaChessPawn/></span></td>
         <td class="w"><span class="pawn"><FaChessPawn/></span></td>
         <td class="d"><span class="pawn"><FaChessPawn/></span></td>
         <td class="w"><span class="pawn"><FaChessPawn/></span></td>
         <td class="d"><span class="pawn"><FaChessPawn/></span></td>
         <td class="w"><span class="pawn"><FaChessPawn/></span></td>
         </tr>
    <tr>
        
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
    </tr>
    <tr>
        
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         </tr>
    <tr>
        
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
    </tr>
    <tr>
        
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         </tr>
         <tr>
        
            <td class="w"><span class="pawn1"><FaChessPawn/></span></td>
            <td class="d"><span class="pawn1"><FaChessPawn/></span></td>
            <td class="w"><span class="pawn1"><FaChessPawn/></span></td>
            <td class="d"><span class="pawn1"><FaChessPawn/></span></td>
            <td class="w"><span class="pawn1"><FaChessPawn/></span></td>
            <td class="d"><span class="pawn1"><FaChessPawn/></span></td>
            <td class="w"><span class="pawn1"><FaChessPawn/></span></td>
            <td class="d"><span class="pawn1"><FaChessPawn/></span></td>
       </tr>
       <tr>
           
            <td class="d"><span class="rook1"><GiChessRook /></span></td>
            <td class="w"><span class="knight1"><GiChessKnight /></span></td>
            <td class="d"><span class="bishop1"><TbChessBishopFilled /></span></td>
            <td class="w"><span class="queen1"><LiaChessQueenSolid /></span></td>
            <td class="d"><span class="king1"><FaChessKing /></span></td>
            <td class="w"><span class="bishop1"><TbChessBishopFilled /></span></td>
            <td class="d"><span class="knight1"><GiChessKnight /></span></td>
            <td class="w"><span class="rook1"><GiChessRook /></span></td>
   </tr>
   </table>
  );
}

export default App;
