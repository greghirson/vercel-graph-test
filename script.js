
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-14 01:50:00", "b": 555.5}, {"a": "2025-01-14 01:55:00", "b": 555.75}, {"a": "2025-01-14 02:00:00", "b": 545.2}, {"a": "2025-01-14 02:05:00", "b": 501.8}, {"a": "2025-01-14 02:10:00", "b": 487.5}, {"a": "2025-01-14 02:15:00", "b": 464.8}, {"a": "2025-01-14 02:20:00", "b": 445.8}, {"a": "2025-01-14 02:25:00", "b": 443.3333333333333}, {"a": "2025-01-14 03:50:00", "b": 491.0}, {"a": "2025-01-14 03:55:00", "b": 490.6}, {"a": "2025-01-14 04:00:00", "b": 453.0}, {"a": "2025-01-14 04:05:00", "b": 430.4}, {"a": "2025-01-14 04:10:00", "b": 424.5}, {"a": "2025-01-14 04:15:00", "b": 414.0}, {"a": "2025-01-14 04:30:00", "b": 408.0}, {"a": "2025-01-14 05:15:00", "b": 409.0}, {"a": "2025-01-14 05:20:00", "b": 426.8}, {"a": "2025-01-14 05:25:00", "b": 426.6666666666667}, {"a": "2025-01-14 05:30:00", "b": 430.25}, {"a": "2025-01-14 05:35:00", "b": 440.8}, {"a": "2025-01-14 05:40:00", "b": 448.3333333333333}, {"a": "2025-01-14 05:45:00", "b": 439.0}, {"a": "2025-01-14 05:50:00", "b": 430.4}, {"a": "2025-01-14 05:55:00", "b": 427.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    