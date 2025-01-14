
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-14 07:00:00", "b": 465.2}, {"a": "2025-01-14 07:05:00", "b": 481.8}, {"a": "2025-01-14 07:10:00", "b": 486.6}, {"a": "2025-01-14 07:15:00", "b": 481.0}, {"a": "2025-01-14 07:20:00", "b": 485.6}, {"a": "2025-01-14 07:25:00", "b": 502.6}, {"a": "2025-01-14 07:30:00", "b": 509.25}, {"a": "2025-01-14 07:35:00", "b": 503.2}, {"a": "2025-01-14 08:40:00", "b": 554.0}, {"a": "2025-01-14 08:45:00", "b": 572.5}, {"a": "2025-01-14 08:50:00", "b": 589.0}, {"a": "2025-01-14 08:55:00", "b": 606.25}, {"a": "2025-01-14 09:00:00", "b": 615.0}, {"a": "2025-01-14 09:05:00", "b": 622.6}, {"a": "2025-01-14 09:10:00", "b": 646.8}, {"a": "2025-01-14 09:15:00", "b": 659.6}, {"a": "2025-01-14 09:20:00", "b": 660.8}, {"a": "2025-01-14 09:25:00", "b": 664.4}, {"a": "2025-01-14 09:30:00", "b": 673.8}, {"a": "2025-01-14 09:35:00", "b": 680.25}, {"a": "2025-01-14 09:40:00", "b": 688.2}, {"a": "2025-01-14 09:45:00", "b": 672.0}, {"a": "2025-01-14 09:50:00", "b": 663.0}, {"a": "2025-01-14 09:55:00", "b": 648.0}, {"a": "2025-01-14 10:00:00", "b": 634.8}, {"a": "2025-01-14 10:05:00", "b": 619.8}, {"a": "2025-01-14 10:10:00", "b": 598.2}, {"a": "2025-01-14 10:15:00", "b": 601.2}, {"a": "2025-01-14 10:20:00", "b": 604.5}, {"a": "2025-01-14 10:25:00", "b": 605.8}, {"a": "2025-01-14 10:30:00", "b": 598.2}, {"a": "2025-01-14 10:35:00", "b": 593.75}, {"a": "2025-01-14 10:40:00", "b": 589.4}, {"a": "2025-01-14 10:45:00", "b": 570.0}, {"a": "2025-01-14 10:50:00", "b": 548.3333333333334}, {"a": "2025-01-14 10:55:00", "b": 541.75}, {"a": "2025-01-14 11:00:00", "b": 539.75}, {"a": "2025-01-14 11:05:00", "b": 546.2}, {"a": "2025-01-14 11:10:00", "b": 535.6}, {"a": "2025-01-14 11:15:00", "b": 533.75}, {"a": "2025-01-14 11:20:00", "b": 532.3333333333334}, {"a": "2025-01-14 11:25:00", "b": 530.6}, {"a": "2025-01-14 11:30:00", "b": 523.5}, {"a": "2025-01-14 11:35:00", "b": 509.2}, {"a": "2025-01-14 11:40:00", "b": 505.25}, {"a": "2025-01-14 11:45:00", "b": 504.5}, {"a": "2025-01-14 11:50:00", "b": 506.5}, {"a": "2025-01-14 11:55:00", "b": 507.0}, {"a": "2025-01-14 12:00:00", "b": 502.25}, {"a": "2025-01-14 12:05:00", "b": 501.2}, {"a": "2025-01-14 12:10:00", "b": 502.25}, {"a": "2025-01-14 12:15:00", "b": 494.25}, {"a": "2025-01-14 12:20:00", "b": 493.6}, {"a": "2025-01-14 12:25:00", "b": 499.8}, {"a": "2025-01-14 12:30:00", "b": 490.5}, {"a": "2025-01-14 12:35:00", "b": 486.5}, {"a": "2025-01-14 12:40:00", "b": 475.8}, {"a": "2025-01-14 12:45:00", "b": 467.4}, {"a": "2025-01-14 12:50:00", "b": 476.4}, {"a": "2025-01-14 12:55:00", "b": 468.6666666666667}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    