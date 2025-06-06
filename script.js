
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-06-06 10:30:00", "b": 3744.0}, {"a": "2025-06-06 10:35:00", "b": 3189.8}, {"a": "2025-06-06 10:40:00", "b": 2395.2}, {"a": "2025-06-06 10:45:00", "b": 2340.0}, {"a": "2025-06-06 10:50:00", "b": 2107.2}, {"a": "2025-06-06 10:55:00", "b": 1983.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    