function SQLEngine(database) {
  this.execute = function(query) {
    // Parse the query and extract the necessary information
    var selectClause, fromClause, joinClauses, whereClause;
    // Implement the logic to parse the query and extract the clauses
    // Use the parse function
    var parsedQuery = parse(query);
    selectClause = parsedQuery.select;
    fromClause = parsedQuery.from;
    joinClauses = parsedQuery.join;
    whereClause = parsedQuery.where;

    // Get the primary table from the FROM clause
    var primaryTable = database[fromClause];

    // Apply JOIN clauses
    for (var i = 0; i < joinClauses.length; i++) {
      var joinTable = joinClauses[i].table;
      var joinCondition = joinClauses[i].condition;
      primaryTable = joinTables(primaryTable, database[joinTable], joinCondition);
    }

    // Apply WHERE clause
    if (whereClause) {
      primaryTable = applyWhere(primaryTable, whereClause);
    }

    // Perform the SELECT operation and return the result
    var result = selectColumns(primaryTable, selectClause);
    return result;
  };

  function joinTables(table1, table2, condition) {
    // Implement the logic to join two tables based on the condition
    // Return the joined table

    // Code
    for (var i = 0; i < table1.length; i++) {
      for (var j = 0; j < table2.length; j++) {
        if (table1[i][condition[0]] === table2[j][condition[1]]) {
          var result = table1[i];
          for (var key in table2[j]) {
            if (key !== condition[1]) {
              result[key] = table2[j][key];
            }
          }
          table1[i] = result;
        }
      }
    }
    return table1;
  }

  function applyWhere(table, condition) {
    // Implement the logic to filter the table based on the condition
    // Return the filtered table
    var result = [];
    for (var i = 0; i < table.length; i++) {
        if (table[i][condition[0]] === condition[1]) {
            result.push(table[i]);
        }
        }
    return result;
  }

  function selectColumns(table, columns) {
    // Implement the logic to select the specified columns from the table
    // Return the selected columns

    // Code
    var result = [];
    for (var i = 0; i < table.length; i++) {
        var row = {};
        for (var j = 0; j < columns.length; j++) {
            row[columns[j]] = table[i][columns[j]];
        }
        result.push(row);
        }
    return result;
  }

    function parse(query) {
        // Implement the logic to parse the query and extract the clauses
        // Return the parsed query object

        // Code
        var result = {};
        var selectClause = query.substring(query.indexOf("SELECT") + 7, query.indexOf("FROM")).trim();
        var fromClause = query.substring(query.indexOf("FROM") + 5, query.indexOf("JOIN")).trim();
        var joinClause = query.substring(query.indexOf("JOIN") + 5, query.indexOf("WHERE")).trim();
        var whereClause = query.substring(query.indexOf("WHERE") + 6).trim();
        var joinClauses = [];
        var joinClauseArray = joinClause.split("AND");
        for (var i = 0; i < joinClauseArray.length; i++) {
            var join = joinClauseArray[i].trim();
            var joinTable = join.substring(0, join.indexOf("ON")).trim();
            var joinCondition = join.substring(join.indexOf("ON") + 2).trim();
            joinClauses.push({ table: joinTable, condition: joinCondition.split("=") });
        }
        result.select = selectClause.split(",");
        result.from = fromClause;
        result.join = joinClauses;
        result.where = whereClause.split("=");
        return result;
    }
}