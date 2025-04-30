
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-30 05:15:00", "b": 438.5}, {"a": "2025-04-30 05:20:00", "b": 424.75}, {"a": "2025-04-30 05:25:00", "b": 414.2}, {"a": "2025-04-30 05:30:00", "b": 430.75}, {"a": "2025-04-30 05:35:00", "b": 440.0}, {"a": "2025-04-30 05:40:00", "b": 424.4}, {"a": "2025-04-30 05:45:00", "b": 428.6}, {"a": "2025-04-30 05:50:00", "b": 432.4}, {"a": "2025-04-30 05:55:00", "b": 409.3333333333333}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    