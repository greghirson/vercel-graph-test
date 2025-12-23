
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-12-22 13:20:00", "b": 5000.0}, {"a": "2025-12-22 13:25:00", "b": 3374.0}, {"a": "2025-12-22 13:30:00", "b": 5000.0}, {"a": "2025-12-22 13:45:00", "b": 407.0}, {"a": "2025-12-22 13:50:00", "b": 406.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    