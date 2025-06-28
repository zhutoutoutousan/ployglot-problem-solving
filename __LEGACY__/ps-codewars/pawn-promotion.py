# https://www.codewars.com/kata/62652939385ccf0030cb537a/train/python
def promotion(board):
    # Ouput the correct piece for the pawn to promote to.
    # board is a list of strings representing the board.
    # The board is always of size 8.
    # The board is never empty.
    # The board is filled with one pawn 'P' and one King 'K'


    # Locate the pawn
    for i in range(len(board)):
        if 'P' in board[i]:
            pawn_row = i
            pawn_col = board[i].index('P')
            break
    # Locate the King
    for i in range(len(board)):
        if 'K' in board[i]:
            king_row = i
            king_col = board[i].index('K')
            break
        else:
            return []

    # Return [] if pawn or king are not on the board
    if pawn_row == -1 or king_row == -1:
        return []


    # Return the piece to promote that will put the king in check, if not, return [], format: ['queen', 'rook', ...], piece are lowercase fullnames
    if pawn_col == king_col:
        return ['queen','rook']
    elif pawn_row == king_row:
        return ['queen','rook']
    elif pawn_col == king_col + 1 or pawn_col == king_col - 1:
        return ['knight']
    elif pawn_row == king_row + 1 or pawn_row == king_row - 1:
        return ['knight']
    # Diagonal
    elif abs(pawn_row - king_row) == abs(pawn_col - king_col):
        return ['queen']
    else:
        return []
