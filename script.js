
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-29 20:00:00", "b": 564.4}, {"a": "2025-04-29 20:05:00", "b": 557.0}, {"a": "2025-04-29 20:10:00", "b": 546.8}, {"a": "2025-04-29 20:15:00", "b": 541.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    