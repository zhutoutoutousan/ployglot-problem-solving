-- https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/lua
local kata = {}

kata.validBraces = function(braces)
  -- your code goes here
    local stack = {}
    for i = 1, #braces do
        if braces:sub(i,i) == '(' or braces:sub(i,i) == '{' or braces:sub(i,i) == '[' then
            table.insert(stack, braces:sub(i,i))
        elseif braces:sub(i,i) == ')' then
            if #stack == 0 or stack[#stack] ~= '(' then
                return false
            else
                table.remove(stack)
            end
        elseif braces:sub(i,i) == '}' then
            if #stack == 0 or stack[#stack] ~= '{' then
                return false
            else
                table.remove(stack)
            end
        elseif braces:sub(i,i) == ']' then
            if #stack == 0 or stack[#stack] ~= '[' then
                return false
            else
                table.remove(stack)
            end
        end
    end
    if #stack == 0 then
        return true
    else
        return false
    end
end

return kata
