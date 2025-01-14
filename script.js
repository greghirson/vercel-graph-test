
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-14 02:00:00", "b": 545.2}, {"a": "2025-01-14 02:05:00", "b": 501.8}, {"a": "2025-01-14 02:10:00", "b": 487.5}, {"a": "2025-01-14 02:15:00", "b": 464.8}, {"a": "2025-01-14 02:20:00", "b": 445.8}, {"a": "2025-01-14 02:25:00", "b": 443.3333333333333}, {"a": "2025-01-14 03:50:00", "b": 491.0}, {"a": "2025-01-14 03:55:00", "b": 490.6}, {"a": "2025-01-14 04:00:00", "b": 453.0}, {"a": "2025-01-14 04:05:00", "b": 430.4}, {"a": "2025-01-14 04:10:00", "b": 424.5}, {"a": "2025-01-14 04:15:00", "b": 414.0}, {"a": "2025-01-14 04:30:00", "b": 408.0}, {"a": "2025-01-14 05:15:00", "b": 409.0}, {"a": "2025-01-14 05:20:00", "b": 426.8}, {"a": "2025-01-14 05:25:00", "b": 426.6666666666667}, {"a": "2025-01-14 05:30:00", "b": 430.25}, {"a": "2025-01-14 05:35:00", "b": 440.8}, {"a": "2025-01-14 05:40:00", "b": 448.3333333333333}, {"a": "2025-01-14 05:45:00", "b": 439.0}, {"a": "2025-01-14 05:50:00", "b": 430.4}, {"a": "2025-01-14 05:55:00", "b": 427.4}, {"a": "2025-01-14 06:00:00", "b": 434.0}, {"a": "2025-01-14 06:05:00", "b": 418.25}, {"a": "2025-01-14 06:10:00", "b": 408.0}, {"a": "2025-01-14 06:15:00", "b": 412.75}, {"a": "2025-01-14 06:20:00", "b": 411.8}, {"a": "2025-01-14 06:25:00", "b": 412.4}, {"a": "2025-01-14 06:30:00", "b": 408.2}, {"a": "2025-01-14 06:35:00", "b": 425.75}, {"a": "2025-01-14 06:40:00", "b": 452.4}, {"a": "2025-01-14 06:45:00", "b": 456.8}, {"a": "2025-01-14 06:50:00", "b": 450.8}, {"a": "2025-01-14 06:55:00", "b": 466.75}, {"a": "2025-01-14 07:00:00", "b": 465.2}, {"a": "2025-01-14 07:05:00", "b": 481.8}, {"a": "2025-01-14 07:10:00", "b": 486.6}, {"a": "2025-01-14 07:15:00", "b": 481.0}, {"a": "2025-01-14 07:20:00", "b": 485.6}, {"a": "2025-01-14 07:25:00", "b": 502.6}, {"a": "2025-01-14 07:30:00", "b": 509.25}, {"a": "2025-01-14 07:35:00", "b": 503.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    